package o5;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final List f42279a;

    /* renamed from: b  reason: collision with root package name */
    private final List f42280b;

    /* renamed from: c  reason: collision with root package name */
    private final List f42281c;

    public h(List list) {
        this.f42281c = list;
        this.f42279a = new ArrayList(list.size());
        this.f42280b = new ArrayList(list.size());
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f42279a.add(((s5.i) list.get(i10)).b().a());
            this.f42280b.add(((s5.i) list.get(i10)).c().a());
        }
    }

    public List a() {
        return this.f42279a;
    }

    public List b() {
        return this.f42281c;
    }

    public List c() {
        return this.f42280b;
    }
}
