package androidx.fragment.app;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l0 {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f4749a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private final HashMap f4750b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final HashMap f4751c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private g0 f4752d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(g0 g0Var) {
        this.f4752d = g0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle B(String str, Bundle bundle) {
        if (bundle != null) {
            return (Bundle) this.f4751c.put(str, bundle);
        }
        return (Bundle) this.f4751c.remove(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(Fragment fragment) {
        if (!this.f4749a.contains(fragment)) {
            synchronized (this.f4749a) {
                this.f4749a.add(fragment);
            }
            fragment.mAdded = true;
            return;
        }
        throw new IllegalStateException("Fragment already added: " + fragment);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f4750b.values().removeAll(Collections.singleton(null));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c(String str) {
        if (this.f4750b.get(str) != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(int i10) {
        for (k0 k0Var : this.f4750b.values()) {
            if (k0Var != null) {
                k0Var.s(i10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        String str2 = str + "    ";
        if (!this.f4750b.isEmpty()) {
            printWriter.print(str);
            printWriter.println("Active Fragments:");
            for (k0 k0Var : this.f4750b.values()) {
                printWriter.print(str);
                if (k0Var != null) {
                    Fragment k10 = k0Var.k();
                    printWriter.println(k10);
                    k10.dump(str2, fileDescriptor, printWriter, strArr);
                } else {
                    printWriter.println("null");
                }
            }
        }
        int size = this.f4749a.size();
        if (size > 0) {
            printWriter.print(str);
            printWriter.println("Added Fragments:");
            for (int i10 = 0; i10 < size; i10++) {
                printWriter.print(str);
                printWriter.print("  #");
                printWriter.print(i10);
                printWriter.print(": ");
                printWriter.println(((Fragment) this.f4749a.get(i10)).toString());
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment f(String str) {
        k0 k0Var = (k0) this.f4750b.get(str);
        if (k0Var != null) {
            return k0Var.k();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment g(int i10) {
        for (int size = this.f4749a.size() - 1; size >= 0; size--) {
            Fragment fragment = (Fragment) this.f4749a.get(size);
            if (fragment != null && fragment.mFragmentId == i10) {
                return fragment;
            }
        }
        for (k0 k0Var : this.f4750b.values()) {
            if (k0Var != null) {
                Fragment k10 = k0Var.k();
                if (k10.mFragmentId == i10) {
                    return k10;
                }
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment h(String str) {
        if (str != null) {
            for (int size = this.f4749a.size() - 1; size >= 0; size--) {
                Fragment fragment = (Fragment) this.f4749a.get(size);
                if (fragment != null && str.equals(fragment.mTag)) {
                    return fragment;
                }
            }
        }
        if (str != null) {
            for (k0 k0Var : this.f4750b.values()) {
                if (k0Var != null) {
                    Fragment k10 = k0Var.k();
                    if (str.equals(k10.mTag)) {
                        return k10;
                    }
                }
            }
            return null;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment i(String str) {
        Fragment findFragmentByWho;
        for (k0 k0Var : this.f4750b.values()) {
            if (k0Var != null && (findFragmentByWho = k0Var.k().findFragmentByWho(str)) != null) {
                return findFragmentByWho;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j(Fragment fragment) {
        View view;
        View view2;
        ViewGroup viewGroup = fragment.mContainer;
        if (viewGroup == null) {
            return -1;
        }
        int indexOf = this.f4749a.indexOf(fragment);
        for (int i10 = indexOf - 1; i10 >= 0; i10--) {
            Fragment fragment2 = (Fragment) this.f4749a.get(i10);
            if (fragment2.mContainer == viewGroup && (view2 = fragment2.mView) != null) {
                return viewGroup.indexOfChild(view2) + 1;
            }
        }
        while (true) {
            indexOf++;
            if (indexOf >= this.f4749a.size()) {
                return -1;
            }
            Fragment fragment3 = (Fragment) this.f4749a.get(indexOf);
            if (fragment3.mContainer == viewGroup && (view = fragment3.mView) != null) {
                return viewGroup.indexOfChild(view);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        ArrayList arrayList = new ArrayList();
        for (k0 k0Var : this.f4750b.values()) {
            if (k0Var != null) {
                arrayList.add(k0Var);
            }
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List l() {
        ArrayList arrayList = new ArrayList();
        for (k0 k0Var : this.f4750b.values()) {
            if (k0Var != null) {
                arrayList.add(k0Var.k());
            } else {
                arrayList.add(null);
            }
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public HashMap m() {
        return this.f4751c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0 n(String str) {
        return (k0) this.f4750b.get(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o() {
        ArrayList arrayList;
        if (this.f4749a.isEmpty()) {
            return Collections.EMPTY_LIST;
        }
        synchronized (this.f4749a) {
            arrayList = new ArrayList(this.f4749a);
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g0 p() {
        return this.f4752d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle q(String str) {
        return (Bundle) this.f4751c.get(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(k0 k0Var) {
        Fragment k10 = k0Var.k();
        if (!c(k10.mWho)) {
            this.f4750b.put(k10.mWho, k0Var);
            if (k10.mRetainInstanceChangedWhileDetached) {
                if (k10.mRetainInstance) {
                    this.f4752d.e(k10);
                } else {
                    this.f4752d.o(k10);
                }
                k10.mRetainInstanceChangedWhileDetached = false;
            }
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Added fragment to active set " + k10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(k0 k0Var) {
        Fragment k10 = k0Var.k();
        if (k10.mRetainInstance) {
            this.f4752d.o(k10);
        }
        if (this.f4750b.get(k10.mWho) == k0Var && ((k0) this.f4750b.put(k10.mWho, null)) != null && FragmentManager.O0(2)) {
            Log.v("FragmentManager", "Removed fragment from active set " + k10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t() {
        Iterator it = this.f4749a.iterator();
        while (it.hasNext()) {
            k0 k0Var = (k0) this.f4750b.get(((Fragment) it.next()).mWho);
            if (k0Var != null) {
                k0Var.m();
            }
        }
        for (k0 k0Var2 : this.f4750b.values()) {
            if (k0Var2 != null) {
                k0Var2.m();
                Fragment k10 = k0Var2.k();
                if (k10.mRemoving && !k10.isInBackStack()) {
                    if (k10.mBeingSaved && !this.f4751c.containsKey(k10.mWho)) {
                        B(k10.mWho, k0Var2.q());
                    }
                    s(k0Var2);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(Fragment fragment) {
        synchronized (this.f4749a) {
            this.f4749a.remove(fragment);
        }
        fragment.mAdded = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v() {
        this.f4750b.clear();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(List list) {
        this.f4749a.clear();
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                String str = (String) it.next();
                Fragment f10 = f(str);
                if (f10 != null) {
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "restoreSaveState: added (" + str + "): " + f10);
                    }
                    a(f10);
                } else {
                    throw new IllegalStateException("No instantiated fragment for (" + str + ")");
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(HashMap hashMap) {
        this.f4751c.clear();
        this.f4751c.putAll(hashMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ArrayList y() {
        ArrayList arrayList = new ArrayList(this.f4750b.size());
        for (k0 k0Var : this.f4750b.values()) {
            if (k0Var != null) {
                Fragment k10 = k0Var.k();
                B(k10.mWho, k0Var.q());
                arrayList.add(k10.mWho);
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Saved state of " + k10 + ": " + k10.mSavedFragmentState);
                }
            }
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ArrayList z() {
        synchronized (this.f4749a) {
            try {
                if (this.f4749a.isEmpty()) {
                    return null;
                }
                ArrayList arrayList = new ArrayList(this.f4749a.size());
                Iterator it = this.f4749a.iterator();
                while (it.hasNext()) {
                    Fragment fragment = (Fragment) it.next();
                    arrayList.add(fragment.mWho);
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "saveAllState: adding fragment (" + fragment.mWho + "): " + fragment);
                    }
                }
                return arrayList;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
