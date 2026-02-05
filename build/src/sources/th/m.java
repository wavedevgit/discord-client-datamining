package th;

import java.util.Date;
import th.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private Integer f50671a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f50672b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f50673c;

    /* renamed from: d  reason: collision with root package name */
    private Date f50674d;

    /* renamed from: e  reason: collision with root package name */
    private String f50675e;

    @Override // th.e.a
    public final e a() {
        return new o(this.f50671a, this.f50672b, this.f50673c, this.f50674d, this.f50675e, null);
    }

    @Override // th.e.a
    public final e.a b(Integer num) {
        this.f50672b = num;
        return this;
    }

    @Override // th.e.a
    public final e.a c(Integer num) {
        this.f50673c = num;
        return this;
    }

    @Override // th.e.a
    public final e.a d(String str) {
        this.f50675e = str;
        return this;
    }

    @Override // th.e.a
    public final e.a e(Date date) {
        this.f50674d = date;
        return this;
    }

    @Override // th.e.a
    public final e.a f(Integer num) {
        this.f50671a = num;
        return this;
    }
}
