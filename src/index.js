function carousel() {
    return {
        currentIndex: 0,
        images: [
            'assets/hero.jpg',
            'assets/jola-facade.jpg',
            'assets/jola-drone.jpg'
        ],
        init() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            }, 5000);
        }
    }
}