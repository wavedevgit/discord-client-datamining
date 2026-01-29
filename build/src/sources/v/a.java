package v;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import q.l2;
import r.f;
import r.n0;
import w.h;
import x.o;
import x.w0;
import x.y0;
import y.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a implements y.a {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f50576a;

    /* renamed from: f  reason: collision with root package name */
    private int f50581f = 0;

    /* renamed from: c  reason: collision with root package name */
    private final Map f50578c = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private Set f50580e = new HashSet();

    /* renamed from: b  reason: collision with root package name */
    private final List f50577b = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private List f50579d = new ArrayList();

    public a(n0 n0Var) {
        this.f50576a = n0Var;
        e();
    }

    private void e() {
        Set<Set> hashSet = new HashSet();
        try {
            hashSet = this.f50576a.e();
        } catch (f unused) {
            y0.c("Camera2CameraCoordinator", "Failed to get concurrent camera ids");
        }
        for (Set set : hashSet) {
            ArrayList arrayList = new ArrayList(set);
            if (arrayList.size() >= 2) {
                String str = (String) arrayList.get(0);
                String str2 = (String) arrayList.get(1);
                try {
                    if (l2.a(this.f50576a, str) && l2.a(this.f50576a, str2)) {
                        this.f50580e.add(new HashSet(Arrays.asList(str, str2)));
                        if (!this.f50578c.containsKey(str)) {
                            this.f50578c.put(str, new ArrayList());
                        }
                        if (!this.f50578c.containsKey(str2)) {
                            this.f50578c.put(str2, new ArrayList());
                        }
                        ((List) this.f50578c.get(str)).add((String) arrayList.get(1));
                        ((List) this.f50578c.get(str2)).add((String) arrayList.get(0));
                    }
                } catch (w0 unused2) {
                    y0.a("Camera2CameraCoordinator", "Concurrent camera id pair: (" + str + ", " + str2 + ") is not backward compatible");
                }
            }
        }
    }

    @Override // y.a
    public void a(a.InterfaceC0746a interfaceC0746a) {
        this.f50577b.add(interfaceC0746a);
    }

    @Override // y.a
    public String b(String str) {
        if (!this.f50578c.containsKey(str)) {
            return null;
        }
        for (String str2 : (List) this.f50578c.get(str)) {
            for (o oVar : this.f50579d) {
                if (str2.equals(h.a(oVar).c())) {
                    return str2;
                }
            }
        }
        return null;
    }

    @Override // y.a
    public int c() {
        return this.f50581f;
    }

    @Override // y.a
    public void d(int i10) {
        if (i10 != this.f50581f) {
            for (a.InterfaceC0746a interfaceC0746a : this.f50577b) {
                interfaceC0746a.a(this.f50581f, i10);
            }
        }
        if (this.f50581f == 2 && i10 != 2) {
            this.f50579d.clear();
        }
        this.f50581f = i10;
    }
}
