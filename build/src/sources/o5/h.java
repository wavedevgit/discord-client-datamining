package o5;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final List f41502a;

    /* renamed from: b  reason: collision with root package name */
    private final List f41503b;

    /* renamed from: c  reason: collision with root package name */
    private final List f41504c;

    public h(List list) {
        this.f41504c = list;
        this.f41502a = new ArrayList(list.size());
        this.f41503b = new ArrayList(list.size());
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f41502a.add(((s5.i) list.get(i10)).b().a());
            this.f41503b.add(((s5.i) list.get(i10)).c().a());
        }
    }

    public List a() {
        return this.f41502a;
    }

    public List b() {
        return this.f41504c;
    }

    public List c() {
        return this.f41503b;
    }
}
