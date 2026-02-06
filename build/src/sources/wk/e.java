package wk;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends i {

    /* renamed from: c  reason: collision with root package name */
    private final String f53835c;

    /* renamed from: d  reason: collision with root package name */
    private final String f53836d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(lk.a aVar, String str, String str2) {
        super(aVar);
        this.f53835c = str2;
        this.f53836d = str;
    }

    private void k(StringBuilder sb2, int i10) {
        int f10 = b().f(i10, 16);
        if (f10 == 38400) {
            return;
        }
        sb2.append('(');
        sb2.append(this.f53835c);
        sb2.append(')');
        int i11 = f10 % 32;
        int i12 = f10 / 32;
        int i13 = (i12 % 12) + 1;
        int i14 = i12 / 12;
        if (i14 / 10 == 0) {
            sb2.append('0');
        }
        sb2.append(i14);
        if (i13 / 10 == 0) {
            sb2.append('0');
        }
        sb2.append(i13);
        if (i11 / 10 == 0) {
            sb2.append('0');
        }
        sb2.append(i11);
    }

    @Override // wk.j
    public String d() {
        if (c().l() == 84) {
            StringBuilder sb2 = new StringBuilder();
            f(sb2, 8);
            j(sb2, 48, 20);
            k(sb2, 68);
            return sb2.toString();
        }
        throw hk.k.a();
    }

    @Override // wk.i
    protected void h(StringBuilder sb2, int i10) {
        sb2.append('(');
        sb2.append(this.f53836d);
        sb2.append(i10 / 100000);
        sb2.append(')');
    }

    @Override // wk.i
    protected int i(int i10) {
        return i10 % 100000;
    }
}
