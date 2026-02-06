package hg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 extends d0 {

    /* renamed from: s  reason: collision with root package name */
    final /* synthetic */ x f25952s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a0(e0 e0Var, CharSequence charSequence, x xVar) {
        super(e0Var, charSequence);
        this.f25952s = xVar;
    }

    @Override // hg.d0
    final int c(int i10) {
        CharSequence charSequence = this.f25960i;
        int length = charSequence.length();
        z.c(i10, length, "index");
        while (i10 < length) {
            if (this.f25952s.a(charSequence.charAt(i10))) {
                return i10;
            }
            i10++;
        }
        return -1;
    }

    @Override // hg.d0
    final int d(int i10) {
        return i10 + 1;
    }
}
