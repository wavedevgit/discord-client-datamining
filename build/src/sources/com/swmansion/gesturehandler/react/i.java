package com.swmansion.gesturehandler.react;

import android.util.SparseArray;
import android.view.View;
import com.facebook.react.bridge.UiThreadUtil;
import java.util.ArrayList;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements kn.j {

    /* renamed from: a  reason: collision with root package name */
    private final SparseArray f18094a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f18095b = new SparseArray();

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f18096c = new SparseArray();

    private final synchronized void d(final kn.d dVar) {
        try {
            Integer num = (Integer) this.f18095b.get(dVar.T());
            if (num != null) {
                this.f18095b.remove(dVar.T());
                ArrayList arrayList = (ArrayList) this.f18096c.get(num.intValue());
                if (arrayList != null) {
                    synchronized (arrayList) {
                        arrayList.remove(dVar);
                    }
                    if (arrayList.size() == 0) {
                        this.f18096c.remove(num.intValue());
                    }
                }
            }
            if (dVar.W() != null) {
                UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.swmansion.gesturehandler.react.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.e(kn.d.this);
                    }
                });
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(kn.d dVar) {
        dVar.q();
    }

    private final synchronized void k(int i10, kn.d dVar) {
        try {
            if (this.f18095b.get(dVar.T()) == null) {
                this.f18095b.put(dVar.T(), Integer.valueOf(i10));
                Object obj = this.f18096c.get(i10);
                if (obj == null) {
                    ArrayList arrayList = new ArrayList(1);
                    arrayList.add(dVar);
                    this.f18096c.put(i10, arrayList);
                } else {
                    synchronized (obj) {
                        ((ArrayList) obj).add(dVar);
                    }
                }
            } else {
                throw new IllegalStateException(("Handler " + dVar + " already attached").toString());
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // kn.j
    public synchronized ArrayList a(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        return i(view.getId());
    }

    public final synchronized boolean c(int i10, int i11, int i12) {
        boolean z10;
        kn.d dVar = (kn.d) this.f18094a.get(i10);
        if (dVar != null) {
            d(dVar);
            dVar.u0(i12);
            k(i11, dVar);
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    public final synchronized void f() {
        this.f18094a.clear();
        this.f18095b.clear();
        this.f18096c.clear();
    }

    public final synchronized void g(int i10) {
        kn.d dVar = (kn.d) this.f18094a.get(i10);
        if (dVar != null) {
            d(dVar);
            this.f18094a.remove(i10);
        }
    }

    public final synchronized kn.d h(int i10) {
        return (kn.d) this.f18094a.get(i10);
    }

    public final synchronized ArrayList i(int i10) {
        return (ArrayList) this.f18096c.get(i10);
    }

    public final synchronized void j(kn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f18094a.put(handler.T(), handler);
    }
}
