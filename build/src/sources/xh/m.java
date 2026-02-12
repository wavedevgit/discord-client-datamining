package xh;

import java.util.Date;
import xh.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private Integer f54784a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f54785b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f54786c;

    /* renamed from: d  reason: collision with root package name */
    private Date f54787d;

    /* renamed from: e  reason: collision with root package name */
    private String f54788e;

    @Override // xh.e.a
    public final e a() {
        return new o(this.f54784a, this.f54785b, this.f54786c, this.f54787d, this.f54788e, null);
    }

    @Override // xh.e.a
    public final e.a b(Integer num) {
        this.f54785b = num;
        return this;
    }

    @Override // xh.e.a
    public final e.a c(Integer num) {
        this.f54786c = num;
        return this;
    }

    @Override // xh.e.a
    public final e.a d(String str) {
        this.f54788e = str;
        return this;
    }

    @Override // xh.e.a
    public final e.a e(Date date) {
        this.f54787d = date;
        return this;
    }

    @Override // xh.e.a
    public final e.a f(Integer num) {
        this.f54784a = num;
        return this;
    }
}
