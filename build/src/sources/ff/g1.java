package ff;

import android.app.Activity;
import android.app.Fragment;
import android.content.Intent;
import android.os.Bundle;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.lang.ref.WeakReference;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g1 extends Fragment implements h {

    /* renamed from: e  reason: collision with root package name */
    private static final WeakHashMap f25107e = new WeakHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final i1 f25108d = new i1();

    public static g1 a(Activity activity) {
        g1 g1Var;
        WeakHashMap weakHashMap = f25107e;
        WeakReference weakReference = (WeakReference) weakHashMap.get(activity);
        if (weakReference != null && (g1Var = (g1) weakReference.get()) != null) {
            return g1Var;
        }
        try {
            g1 g1Var2 = (g1) activity.getFragmentManager().findFragmentByTag("LifecycleFragmentImpl");
            if (g1Var2 == null || g1Var2.isRemoving()) {
                g1Var2 = new g1();
                activity.getFragmentManager().beginTransaction().add(g1Var2, "LifecycleFragmentImpl").commitAllowingStateLoss();
            }
            weakHashMap.put(activity, new WeakReference(g1Var2));
            return g1Var2;
        } catch (ClassCastException e10) {
            throw new IllegalStateException("Fragment with tag LifecycleFragmentImpl is not a LifecycleFragmentImpl", e10);
        }
    }

    @Override // ff.h
    public final g b(String str, Class cls) {
        return this.f25108d.c(str, cls);
    }

    @Override // android.app.Fragment
    public final void dump(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        super.dump(str, fileDescriptor, printWriter, strArr);
        this.f25108d.e(str, fileDescriptor, printWriter, strArr);
    }

    @Override // ff.h
    public final void e(String str, g gVar) {
        this.f25108d.d(str, gVar);
    }

    @Override // ff.h
    public final Activity g() {
        return getActivity();
    }

    @Override // android.app.Fragment
    public final void onActivityResult(int i10, int i11, Intent intent) {
        super.onActivityResult(i10, i11, intent);
        this.f25108d.f(i10, i11, intent);
    }

    @Override // android.app.Fragment
    public final void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.f25108d.g(bundle);
    }

    @Override // android.app.Fragment
    public final void onDestroy() {
        super.onDestroy();
        this.f25108d.h();
    }

    @Override // android.app.Fragment
    public final void onResume() {
        super.onResume();
        this.f25108d.i();
    }

    @Override // android.app.Fragment
    public final void onSaveInstanceState(Bundle bundle) {
        super.onSaveInstanceState(bundle);
        this.f25108d.j(bundle);
    }

    @Override // android.app.Fragment
    public final void onStart() {
        super.onStart();
        this.f25108d.k();
    }

    @Override // android.app.Fragment
    public final void onStop() {
        super.onStop();
        this.f25108d.l();
    }
}
