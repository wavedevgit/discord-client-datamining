package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n5 {

    /* renamed from: a  reason: collision with root package name */
    private final byte f14066a;

    /* renamed from: b  reason: collision with root package name */
    private final byte f14067b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n5(int i10) {
        this.f14066a = (byte) (i10 & 224);
        this.f14067b = (byte) (i10 & 31);
    }

    public final byte a() {
        return this.f14067b;
    }

    public final byte b() {
        return this.f14066a;
    }

    public final int c() {
        return (this.f14066a >> 5) & 7;
    }
}
