package vh;

import java.util.Date;
import vh.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private Integer f52387a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f52388b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f52389c;

    /* renamed from: d  reason: collision with root package name */
    private Date f52390d;

    /* renamed from: e  reason: collision with root package name */
    private String f52391e;

    @Override // vh.e.a
    public final e a() {
        return new o(this.f52387a, this.f52388b, this.f52389c, this.f52390d, this.f52391e, null);
    }

    @Override // vh.e.a
    public final e.a b(Integer num) {
        this.f52388b = num;
        return this;
    }

    @Override // vh.e.a
    public final e.a c(Integer num) {
        this.f52389c = num;
        return this;
    }

    @Override // vh.e.a
    public final e.a d(String str) {
        this.f52391e = str;
        return this;
    }

    @Override // vh.e.a
    public final e.a e(Date date) {
        this.f52390d = date;
        return this;
    }

    @Override // vh.e.a
    public final e.a f(Integer num) {
        this.f52387a = num;
        return this;
    }
}
