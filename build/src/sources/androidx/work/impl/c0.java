package androidx.work.impl;

import android.text.TextUtils;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c0 extends k4.w {

    /* renamed from: j  reason: collision with root package name */
    private static final String f5592j = k4.m.i("WorkContinuationImpl");

    /* renamed from: a  reason: collision with root package name */
    private final p0 f5593a;

    /* renamed from: b  reason: collision with root package name */
    private final String f5594b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.f f5595c;

    /* renamed from: d  reason: collision with root package name */
    private final List f5596d;

    /* renamed from: e  reason: collision with root package name */
    private final List f5597e;

    /* renamed from: f  reason: collision with root package name */
    private final List f5598f;

    /* renamed from: g  reason: collision with root package name */
    private final List f5599g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f5600h;

    /* renamed from: i  reason: collision with root package name */
    private k4.q f5601i;

    public c0(p0 p0Var, List list) {
        this(p0Var, null, k4.f.KEEP, list, null);
    }

    private static boolean i(c0 c0Var, Set set) {
        set.addAll(c0Var.c());
        Set l10 = l(c0Var);
        Iterator it = set.iterator();
        while (it.hasNext()) {
            if (l10.contains((String) it.next())) {
                return true;
            }
        }
        List<c0> e10 = c0Var.e();
        if (e10 != null && !e10.isEmpty()) {
            for (c0 c0Var2 : e10) {
                if (i(c0Var2, set)) {
                    return true;
                }
            }
        }
        set.removeAll(c0Var.c());
        return false;
    }

    public static Set l(c0 c0Var) {
        HashSet hashSet = new HashSet();
        List<c0> e10 = c0Var.e();
        if (e10 != null && !e10.isEmpty()) {
            for (c0 c0Var2 : e10) {
                hashSet.addAll(c0Var2.c());
            }
        }
        return hashSet;
    }

    public k4.q a() {
        if (!this.f5600h) {
            q4.c cVar = new q4.c(this);
            this.f5593a.q().d(cVar);
            this.f5601i = cVar.d();
        } else {
            k4.m e10 = k4.m.e();
            String str = f5592j;
            e10.k(str, "Already enqueued work ids (" + TextUtils.join(", ", this.f5597e) + ")");
        }
        return this.f5601i;
    }

    public k4.f b() {
        return this.f5595c;
    }

    public List c() {
        return this.f5597e;
    }

    public String d() {
        return this.f5594b;
    }

    public List e() {
        return this.f5599g;
    }

    public List f() {
        return this.f5596d;
    }

    public p0 g() {
        return this.f5593a;
    }

    public boolean h() {
        return i(this, new HashSet());
    }

    public boolean j() {
        return this.f5600h;
    }

    public void k() {
        this.f5600h = true;
    }

    public c0(p0 p0Var, String str, k4.f fVar, List list) {
        this(p0Var, str, fVar, list, null);
    }

    public c0(p0 p0Var, String str, k4.f fVar, List list, List list2) {
        this.f5593a = p0Var;
        this.f5594b = str;
        this.f5595c = fVar;
        this.f5596d = list;
        this.f5599g = list2;
        this.f5597e = new ArrayList(list.size());
        this.f5598f = new ArrayList();
        if (list2 != null) {
            Iterator it = list2.iterator();
            while (it.hasNext()) {
                this.f5598f.addAll(((c0) it.next()).f5598f);
            }
        }
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (fVar == k4.f.REPLACE && ((k4.z) list.get(i10)).d().g() != LongCompanionObject.MAX_VALUE) {
                throw new IllegalArgumentException("Next Schedule Time Override must be used with ExistingPeriodicWorkPolicyUPDATE (preferably) or KEEP");
            }
            String b10 = ((k4.z) list.get(i10)).b();
            this.f5597e.add(b10);
            this.f5598f.add(b10);
        }
    }
}
