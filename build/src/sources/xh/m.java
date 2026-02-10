package xh;

import java.util.Date;
import xh.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private Integer f54783a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f54784b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f54785c;

    /* renamed from: d  reason: collision with root package name */
    private Date f54786d;

    /* renamed from: e  reason: collision with root package name */
    private String f54787e;

    @Override // xh.e.a
    public final e a() {
        return new o(this.f54783a, this.f54784b, this.f54785c, this.f54786d, this.f54787e, null);
    }

    @Override // xh.e.a
    public final e.a b(Integer num) {
        this.f54784b = num;
        return this;
    }

    @Override // xh.e.a
    public final e.a c(Integer num) {
        this.f54785c = num;
        return this;
    }

    @Override // xh.e.a
    public final e.a d(String str) {
        this.f54787e = str;
        return this;
    }

    @Override // xh.e.a
    public final e.a e(Date date) {
        this.f54786d = date;
        return this;
    }

    @Override // xh.e.a
    public final e.a f(Integer num) {
        this.f54783a = num;
        return this;
    }
}
