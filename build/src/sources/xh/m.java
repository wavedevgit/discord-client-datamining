package xh;

import java.util.Date;
import xh.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private Integer f55352a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f55353b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f55354c;

    /* renamed from: d  reason: collision with root package name */
    private Date f55355d;

    /* renamed from: e  reason: collision with root package name */
    private String f55356e;

    @Override // xh.e.a
    public final e a() {
        return new o(this.f55352a, this.f55353b, this.f55354c, this.f55355d, this.f55356e, null);
    }

    @Override // xh.e.a
    public final e.a b(Integer num) {
        this.f55353b = num;
        return this;
    }

    @Override // xh.e.a
    public final e.a c(Integer num) {
        this.f55354c = num;
        return this;
    }

    @Override // xh.e.a
    public final e.a d(String str) {
        this.f55356e = str;
        return this;
    }

    @Override // xh.e.a
    public final e.a e(Date date) {
        this.f55355d = date;
        return this;
    }

    @Override // xh.e.a
    public final e.a f(Integer num) {
        this.f55352a = num;
        return this;
    }
}
