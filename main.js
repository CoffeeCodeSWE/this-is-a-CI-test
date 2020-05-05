function f() {
    try {
        return 4;
    } catch (error) {
        return 0;
    } finally {
        return 2;
    }
}