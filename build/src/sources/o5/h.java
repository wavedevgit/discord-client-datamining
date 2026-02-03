package o5;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final List f42373a;

    /* renamed from: b  reason: collision with root package name */
    private final List f42374b;

    /* renamed from: c  reason: collision with root package name */
    private final List f42375c;

    public h(List list) {
        this.f42375c = list;
        this.f42373a = new ArrayList(list.size());
        this.f42374b = new ArrayList(list.size());
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f42373a.add(((s5.i) list.get(i10)).b().a());
            this.f42374b.add(((s5.i) list.get(i10)).c().a());
        }
    }

    public List a() {
        return this.f42373a;
    }

    public List b() {
        return this.f42375c;
    }

    public List c() {
        return this.f42374b;
    }
}
