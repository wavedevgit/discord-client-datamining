package androidx.datastore.preferences.protobuf;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b1 implements m0 {

    /* renamed from: a  reason: collision with root package name */
    private final o0 f3587a;

    /* renamed from: b  reason: collision with root package name */
    private final String f3588b;

    /* renamed from: c  reason: collision with root package name */
    private final Object[] f3589c;

    /* renamed from: d  reason: collision with root package name */
    private final int f3590d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b1(o0 o0Var, String str, Object[] objArr) {
        this.f3587a = o0Var;
        this.f3588b = str;
        this.f3589c = objArr;
        char charAt = str.charAt(0);
        if (charAt < 55296) {
            this.f3590d = charAt;
            return;
        }
        int i10 = charAt & 8191;
        int i11 = 13;
        int i12 = 1;
        while (true) {
            int i13 = i12 + 1;
            char charAt2 = str.charAt(i12);
            if (charAt2 >= 55296) {
                i10 |= (charAt2 & 8191) << i11;
                i11 += 13;
                i12 = i13;
            } else {
                this.f3590d = i10 | (charAt2 << i11);
                return;
            }
        }
    }

    @Override // androidx.datastore.preferences.protobuf.m0
    public boolean a() {
        if ((this.f3590d & 2) == 2) {
            return true;
        }
        return false;
    }

    @Override // androidx.datastore.preferences.protobuf.m0
    public o0 b() {
        return this.f3587a;
    }

    @Override // androidx.datastore.preferences.protobuf.m0
    public y0 c() {
        if ((this.f3590d & 1) == 1) {
            return y0.PROTO2;
        }
        return y0.PROTO3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Object[] d() {
        return this.f3589c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f3588b;
    }
}
