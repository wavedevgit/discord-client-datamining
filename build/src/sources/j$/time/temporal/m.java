package j$.time.temporal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final /* synthetic */ class m implements l {

    /* renamed from: a  reason: collision with root package name */
    public final /* synthetic */ int f31644a;

    public /* synthetic */ m(int i10) {
        this.f31644a = i10;
    }

    @Override // j$.time.temporal.l
    public final k d(k kVar) {
        int g10 = kVar.g(a.DAY_OF_WEEK);
        int i10 = this.f31644a;
        if (g10 == i10) {
            return kVar;
        }
        int i11 = g10 - i10;
        return kVar.h(i11 >= 0 ? 7 - i11 : -i11, b.DAYS);
    }
}
