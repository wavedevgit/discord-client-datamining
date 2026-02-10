package o5;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final List f38611a;

    /* renamed from: b  reason: collision with root package name */
    private final List f38612b;

    /* renamed from: c  reason: collision with root package name */
    private final List f38613c;

    public h(List list) {
        this.f38613c = list;
        this.f38611a = new ArrayList(list.size());
        this.f38612b = new ArrayList(list.size());
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f38611a.add(((t5.i) list.get(i10)).b().a());
            this.f38612b.add(((t5.i) list.get(i10)).c().a());
        }
    }

    public List a() {
        return this.f38611a;
    }

    public List b() {
        return this.f38613c;
    }

    public List c() {
        return this.f38612b;
    }
}
