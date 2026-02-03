package hg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r extends u {

    /* renamed from: s  reason: collision with root package name */
    final /* synthetic */ o f26993s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public r(s sVar, b bVar, CharSequence charSequence, o oVar) {
        super(bVar, charSequence);
        this.f26993s = oVar;
    }

    @Override // hg.u
    final int c(int i10) {
        return i10 + 1;
    }

    @Override // hg.u
    final int d(int i10) {
        CharSequence charSequence = this.f26997i;
        int length = charSequence.length();
        q.a(i10, length, "index");
        while (i10 < length) {
            if (this.f26993s.a(charSequence.charAt(i10))) {
                return i10;
            }
            i10++;
        }
        return -1;
    }
}
