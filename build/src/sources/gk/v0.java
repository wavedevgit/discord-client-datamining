package gk;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v0 implements g0 {

    /* renamed from: a  reason: collision with root package name */
    private final i0 f25374a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25375b;

    /* renamed from: c  reason: collision with root package name */
    private final Object[] f25376c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25377d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v0(i0 i0Var, String str, Object[] objArr) {
        this.f25374a = i0Var;
        this.f25375b = str;
        this.f25376c = objArr;
        char charAt = str.charAt(0);
        if (charAt < 55296) {
            this.f25377d = charAt;
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
                this.f25377d = i10 | (charAt2 << i11);
                return;
            }
        }
    }

    @Override // gk.g0
    public boolean a() {
        if ((this.f25377d & 2) == 2) {
            return true;
        }
        return false;
    }

    @Override // gk.g0
    public i0 b() {
        return this.f25374a;
    }

    @Override // gk.g0
    public s0 c() {
        if ((this.f25377d & 1) == 1) {
            return s0.PROTO2;
        }
        return s0.PROTO3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Object[] d() {
        return this.f25376c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String e() {
        return this.f25375b;
    }
}
