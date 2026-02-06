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
    private static final String f6046j = k4.m.i("WorkContinuationImpl");

    /* renamed from: a  reason: collision with root package name */
    private final p0 f6047a;

    /* renamed from: b  reason: collision with root package name */
    private final String f6048b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.f f6049c;

    /* renamed from: d  reason: collision with root package name */
    private final List f6050d;

    /* renamed from: e  reason: collision with root package name */
    private final List f6051e;

    /* renamed from: f  reason: collision with root package name */
    private final List f6052f;

    /* renamed from: g  reason: collision with root package name */
    private final List f6053g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f6054h;

    /* renamed from: i  reason: collision with root package name */
    private k4.q f6055i;

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
        if (!this.f6054h) {
            q4.c cVar = new q4.c(this);
            this.f6047a.q().d(cVar);
            this.f6055i = cVar.d();
        } else {
            k4.m e10 = k4.m.e();
            String str = f6046j;
            e10.k(str, "Already enqueued work ids (" + TextUtils.join(", ", this.f6051e) + ")");
        }
        return this.f6055i;
    }

    public k4.f b() {
        return this.f6049c;
    }

    public List c() {
        return this.f6051e;
    }

    public String d() {
        return this.f6048b;
    }

    public List e() {
        return this.f6053g;
    }

    public List f() {
        return this.f6050d;
    }

    public p0 g() {
        return this.f6047a;
    }

    public boolean h() {
        return i(this, new HashSet());
    }

    public boolean j() {
        return this.f6054h;
    }

    public void k() {
        this.f6054h = true;
    }

    public c0(p0 p0Var, String str, k4.f fVar, List list) {
        this(p0Var, str, fVar, list, null);
    }

    public c0(p0 p0Var, String str, k4.f fVar, List list, List list2) {
        this.f6047a = p0Var;
        this.f6048b = str;
        this.f6049c = fVar;
        this.f6050d = list;
        this.f6053g = list2;
        this.f6051e = new ArrayList(list.size());
        this.f6052f = new ArrayList();
        if (list2 != null) {
            Iterator it = list2.iterator();
            while (it.hasNext()) {
                this.f6052f.addAll(((c0) it.next()).f6052f);
            }
        }
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (fVar == k4.f.REPLACE && ((k4.z) list.get(i10)).d().g() != LongCompanionObject.MAX_VALUE) {
                throw new IllegalArgumentException("Next Schedule Time Override must be used with ExistingPeriodicWorkPolicyUPDATE (preferably) or KEEP");
            }
            String b10 = ((k4.z) list.get(i10)).b();
            this.f6051e.add(b10);
            this.f6052f.add(b10);
        }
    }
}
