package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private final Object f14260a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f14261b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f14262c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Object obj, Object obj2, Object obj3) {
        this.f14260a = obj;
        this.f14261b = obj2;
        this.f14262c = obj3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final IllegalArgumentException a() {
        Object obj = this.f14262c;
        Object obj2 = this.f14261b;
        Object obj3 = this.f14260a;
        String valueOf = String.valueOf(obj3);
        String valueOf2 = String.valueOf(obj2);
        String valueOf3 = String.valueOf(obj3);
        String valueOf4 = String.valueOf(obj);
        return new IllegalArgumentException("Multiple entries with same key: " + valueOf + "=" + valueOf2 + " and " + valueOf3 + "=" + valueOf4);
    }
}
