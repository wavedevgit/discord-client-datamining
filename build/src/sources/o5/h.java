package o5;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final List f40285a;

    /* renamed from: b  reason: collision with root package name */
    private final List f40286b;

    /* renamed from: c  reason: collision with root package name */
    private final List f40287c;

    public h(List list) {
        this.f40287c = list;
        this.f40285a = new ArrayList(list.size());
        this.f40286b = new ArrayList(list.size());
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f40285a.add(((t5.i) list.get(i10)).b().a());
            this.f40286b.add(((t5.i) list.get(i10)).c().a());
        }
    }

    public List a() {
        return this.f40285a;
    }

    public List b() {
        return this.f40287c;
    }

    public List c() {
        return this.f40286b;
    }
}
