package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n5 {

    /* renamed from: a  reason: collision with root package name */
    private final byte f13672a;

    /* renamed from: b  reason: collision with root package name */
    private final byte f13673b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n5(int i10) {
        this.f13672a = (byte) (i10 & 224);
        this.f13673b = (byte) (i10 & 31);
    }

    public final byte a() {
        return this.f13673b;
    }

    public final byte b() {
        return this.f13672a;
    }

    public final int c() {
        return (this.f13672a >> 5) & 7;
    }
}
