package uh;

import java.util.Date;
import uh.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private Integer f51479a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f51480b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f51481c;

    /* renamed from: d  reason: collision with root package name */
    private Date f51482d;

    /* renamed from: e  reason: collision with root package name */
    private String f51483e;

    @Override // uh.e.a
    public final e a() {
        return new o(this.f51479a, this.f51480b, this.f51481c, this.f51482d, this.f51483e, null);
    }

    @Override // uh.e.a
    public final e.a b(Integer num) {
        this.f51480b = num;
        return this;
    }

    @Override // uh.e.a
    public final e.a c(Integer num) {
        this.f51481c = num;
        return this;
    }

    @Override // uh.e.a
    public final e.a d(String str) {
        this.f51483e = str;
        return this;
    }

    @Override // uh.e.a
    public final e.a e(Date date) {
        this.f51482d = date;
        return this;
    }

    @Override // uh.e.a
    public final e.a f(Integer num) {
        this.f51479a = num;
        return this;
    }
}
