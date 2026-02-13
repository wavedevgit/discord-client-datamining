package o5;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final List f39180a;

    /* renamed from: b  reason: collision with root package name */
    private final List f39181b;

    /* renamed from: c  reason: collision with root package name */
    private final List f39182c;

    public h(List list) {
        this.f39182c = list;
        this.f39180a = new ArrayList(list.size());
        this.f39181b = new ArrayList(list.size());
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f39180a.add(((t5.i) list.get(i10)).b().a());
            this.f39181b.add(((t5.i) list.get(i10)).c().a());
        }
    }

    public List a() {
        return this.f39180a;
    }

    public List b() {
        return this.f39182c;
    }

    public List c() {
        return this.f39181b;
    }
}
