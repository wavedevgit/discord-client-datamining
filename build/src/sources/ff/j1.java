package ff;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.lang.ref.WeakReference;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j1 extends Fragment implements h {

    /* renamed from: e  reason: collision with root package name */
    private static final WeakHashMap f23927e = new WeakHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final i1 f23928d = new i1();

    public static j1 x(FragmentActivity fragmentActivity) {
        j1 j1Var;
        WeakHashMap weakHashMap = f23927e;
        WeakReference weakReference = (WeakReference) weakHashMap.get(fragmentActivity);
        if (weakReference != null && (j1Var = (j1) weakReference.get()) != null) {
            return j1Var;
        }
        try {
            j1 j1Var2 = (j1) fragmentActivity.getSupportFragmentManager().o0("SLifecycleFragmentImpl");
            if (j1Var2 == null || j1Var2.isRemoving()) {
                j1Var2 = new j1();
                fragmentActivity.getSupportFragmentManager().r().e(j1Var2, "SLifecycleFragmentImpl").h();
            }
            weakHashMap.put(fragmentActivity, new WeakReference(j1Var2));
            return j1Var2;
        } catch (ClassCastException e10) {
            throw new IllegalStateException("Fragment with tag SLifecycleFragmentImpl is not a SupportLifecycleFragmentImpl", e10);
        }
    }

    @Override // ff.h
    public final g d(String str, Class cls) {
        return this.f23928d.c(str, cls);
    }

    @Override // androidx.fragment.app.Fragment
    public final void dump(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        super.dump(str, fileDescriptor, printWriter, strArr);
        this.f23928d.e(str, fileDescriptor, printWriter, strArr);
    }

    @Override // ff.h
    public final void k(String str, g gVar) {
        this.f23928d.d(str, gVar);
    }

    @Override // ff.h
    public final Activity n() {
        return getActivity();
    }

    @Override // androidx.fragment.app.Fragment
    public final void onActivityResult(int i10, int i11, Intent intent) {
        super.onActivityResult(i10, i11, intent);
        this.f23928d.f(i10, i11, intent);
    }

    @Override // androidx.fragment.app.Fragment
    public final void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.f23928d.g(bundle);
    }

    @Override // androidx.fragment.app.Fragment
    public final void onDestroy() {
        super.onDestroy();
        this.f23928d.h();
    }

    @Override // androidx.fragment.app.Fragment
    public final void onResume() {
        super.onResume();
        this.f23928d.i();
    }

    @Override // androidx.fragment.app.Fragment
    public final void onSaveInstanceState(Bundle bundle) {
        super.onSaveInstanceState(bundle);
        this.f23928d.j(bundle);
    }

    @Override // androidx.fragment.app.Fragment
    public final void onStart() {
        super.onStart();
        this.f23928d.k();
    }

    @Override // androidx.fragment.app.Fragment
    public final void onStop() {
        super.onStop();
        this.f23928d.l();
    }
}
