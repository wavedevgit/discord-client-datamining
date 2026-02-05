package kn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public static final i f31964a = new i();

    private i() {
    }

    public final int a(int i10, int i11) {
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    if (i10 == 3) {
                        return 2;
                    }
                    if (i10 == 4) {
                        return 0;
                    }
                    if (i10 == 5) {
                        return -1;
                    }
                    if (i10 == 6) {
                        return 1;
                    }
                    throw new IllegalArgumentException("[RNScreens] Invalid state " + i10 + " for detentCount " + i11);
                }
                throw new IllegalArgumentException("[RNScreens] Invalid state " + i10 + " for detentCount " + i11);
            } else if (i10 == 3) {
                return 1;
            } else {
                if (i10 == 4) {
                    return 0;
                }
                if (i10 == 5) {
                    return -1;
                }
                throw new IllegalArgumentException("[RNScreens] Invalid state " + i10 + " for detentCount " + i11);
            }
        } else if (i10 == 3) {
            return 0;
        } else {
            if (i10 == 5) {
                return -1;
            }
            throw new IllegalArgumentException("[RNScreens] Invalid state " + i10 + " for detentCount " + i11);
        }
    }

    public final boolean b(int i10) {
        if (i10 != 3 && i10 != 4 && i10 != 5 && i10 != 6) {
            return false;
        }
        return true;
    }

    public final int c(int i10, int i11) {
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    if (i10 == -1) {
                        return 5;
                    }
                    if (i10 == 0) {
                        return 4;
                    }
                    if (i10 != 1) {
                        if (i10 == 2) {
                            return 3;
                        }
                        throw new IllegalArgumentException("[RNScreens] Invalid detentCount/index combination " + i11 + " / " + i10);
                    }
                    return 6;
                }
                throw new IllegalArgumentException("[RNScreens] Invalid detentCount/index combination " + i11 + " / " + i10);
            } else if (i10 == -1) {
                return 5;
            } else {
                if (i10 == 0) {
                    return 4;
                }
                if (i10 == 1) {
                    return 3;
                }
                throw new IllegalArgumentException("[RNScreens] Invalid detentCount/index combination " + i11 + " / " + i10);
            }
        } else if (i10 == -1) {
            return 5;
        } else {
            if (i10 == 0) {
                return 3;
            }
            throw new IllegalArgumentException("[RNScreens] Invalid detentCount/index combination " + i11 + " / " + i10);
        }
    }
}
