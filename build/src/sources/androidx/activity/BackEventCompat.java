package androidx.activity;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BackEventCompat {

    /* renamed from: e  reason: collision with root package name */
    public static final a f1227e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final float f1228a;

    /* renamed from: b  reason: collision with root package name */
    private final float f1229b;

    /* renamed from: c  reason: collision with root package name */
    private final float f1230c;

    /* renamed from: d  reason: collision with root package name */
    private final int f1231d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public BackEventCompat(float f10, float f11, float f12, int i10) {
        this.f1228a = f10;
        this.f1229b = f11;
        this.f1230c = f12;
        this.f1231d = i10;
    }

    public final float a() {
        return this.f1230c;
    }

    public final int b() {
        return this.f1231d;
    }

    public String toString() {
        return "BackEventCompat{touchX=" + this.f1228a + ", touchY=" + this.f1229b + ", progress=" + this.f1230c + ", swipeEdge=" + this.f1231d + '}';
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public BackEventCompat(android.window.BackEvent r5) {
        /*
            r4 = this;
            java.lang.String r0 = "backEvent"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            androidx.activity.a r0 = androidx.activity.a.f1281a
            float r1 = r0.c(r5)
            float r2 = r0.d(r5)
            float r3 = r0.a(r5)
            int r5 = r0.b(r5)
            r4.<init>(r1, r2, r3, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.activity.BackEventCompat.<init>(android.window.BackEvent):void");
    }
}
