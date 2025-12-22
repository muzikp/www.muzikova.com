"""
Optimalizace obrázků pro web
- Zmenší obrázky na max 1920px na delší straně
- Komprese JPEG s kvalitou 85%
- Uloží optimalizované verze
"""

from PIL import Image
import os

def optimize_image(input_path, output_path, max_size=1920, quality=85):
    """Optimalizuje obrázek pro web"""
    img = Image.open(input_path)
    
    # Převod na RGB pokud je RGBA
    if img.mode in ('RGBA', 'LA', 'P'):
        img = img.convert('RGB')
    
    # Zmenšení obrázku pokud je větší než max_size
    width, height = img.size
    if max(width, height) > max_size:
        if width > height:
            new_width = max_size
            new_height = int(height * (max_size / width))
        else:
            new_height = max_size
            new_width = int(width * (max_size / height))
        
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        print(f"  Zmenšeno: {width}x{height} -> {new_width}x{new_height}")
    
    # Uložení s optimalizací
    img.save(output_path, 'JPEG', quality=quality, optimize=True)
    
    # Statistiky
    original_size = os.path.getsize(input_path) / 1024 / 1024
    optimized_size = os.path.getsize(output_path) / 1024 / 1024
    saved = ((original_size - optimized_size) / original_size) * 100
    
    print(f"  Velikost: {original_size:.2f} MB -> {optimized_size:.2f} MB (úspora {saved:.1f}%)")

def main():
    images_dir = "static/images"
    
    # Získání všech JPG souborů
    jpg_files = [f for f in os.listdir(images_dir) if f.lower().endswith('.jpg')]
    
    print(f"Nalezeno {len(jpg_files)} obrázků k optimalizaci\n")
    
    for filename in jpg_files:
        input_path = os.path.join(images_dir, filename)
        
        # Vytvoření názvu pro optimalizovanou verzi
        name, ext = os.path.splitext(filename)
        output_filename = f"{name}_optimized{ext}"
        output_path = os.path.join(images_dir, output_filename)
        
        print(f"Optimalizuji: {filename}")
        optimize_image(input_path, output_path)
        print()
    
    print("✅ Hotovo! Optimalizované obrázky mají příponu '_optimized'")
    print("Můžete je přejmenovat a nahradit původní soubory.")

if __name__ == "__main__":
    main()
