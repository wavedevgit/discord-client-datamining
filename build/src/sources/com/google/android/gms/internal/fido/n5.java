package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n5 {

    /* renamed from: a  reason: collision with root package name */
    private final byte f14029a;

    /* renamed from: b  reason: collision with root package name */
    private final byte f14030b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n5(int i10) {
        this.f14029a = (byte) (i10 & 224);
        this.f14030b = (byte) (i10 & 31);
    }

    public final byte a() {
        return this.f14030b;
    }

    public final byte b() {
        return this.f14029a;
    }

    public final int c() {
        return (this.f14029a >> 5) & 7;
    }
}
