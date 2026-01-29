package o5;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final List f42429a;

    /* renamed from: b  reason: collision with root package name */
    private final List f42430b;

    /* renamed from: c  reason: collision with root package name */
    private final List f42431c;

    public h(List list) {
        this.f42431c = list;
        this.f42429a = new ArrayList(list.size());
        this.f42430b = new ArrayList(list.size());
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f42429a.add(((s5.i) list.get(i10)).b().a());
            this.f42430b.add(((s5.i) list.get(i10)).c().a());
        }
    }

    public List a() {
        return this.f42429a;
    }

    public List b() {
        return this.f42431c;
    }

    public List c() {
        return this.f42430b;
    }
}
