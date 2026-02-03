package o5;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final List f42573a;

    /* renamed from: b  reason: collision with root package name */
    private final List f42574b;

    /* renamed from: c  reason: collision with root package name */
    private final List f42575c;

    public h(List list) {
        this.f42575c = list;
        this.f42573a = new ArrayList(list.size());
        this.f42574b = new ArrayList(list.size());
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f42573a.add(((s5.i) list.get(i10)).b().a());
            this.f42574b.add(((s5.i) list.get(i10)).c().a());
        }
    }

    public List a() {
        return this.f42573a;
    }

    public List b() {
        return this.f42575c;
    }

    public List c() {
        return this.f42574b;
    }
}
