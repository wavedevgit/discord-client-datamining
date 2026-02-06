package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private final Object f14223a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f14224b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f14225c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Object obj, Object obj2, Object obj3) {
        this.f14223a = obj;
        this.f14224b = obj2;
        this.f14225c = obj3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final IllegalArgumentException a() {
        Object obj = this.f14225c;
        Object obj2 = this.f14224b;
        Object obj3 = this.f14223a;
        String valueOf = String.valueOf(obj3);
        String valueOf2 = String.valueOf(obj2);
        String valueOf3 = String.valueOf(obj3);
        String valueOf4 = String.valueOf(obj);
        return new IllegalArgumentException("Multiple entries with same key: " + valueOf + "=" + valueOf2 + " and " + valueOf3 + "=" + valueOf4);
    }
}
