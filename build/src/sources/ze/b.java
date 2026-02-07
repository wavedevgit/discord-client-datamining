package ze;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f56287a = 1;

    public b a(Object obj) {
        int hashCode;
        int i10 = this.f56287a * 31;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        this.f56287a = i10 + hashCode;
        return this;
    }

    public int b() {
        return this.f56287a;
    }

    public final b c(boolean z10) {
        this.f56287a = (this.f56287a * 31) + (z10 ? 1 : 0);
        return this;
    }
}
