package androidx.fragment.app;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements LayoutInflater.Factory2 {

    /* renamed from: d  reason: collision with root package name */
    final FragmentManager f4836d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ k0 f4837d;

        a(k0 k0Var) {
            this.f4837d = k0Var;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Fragment k10 = this.f4837d.k();
            this.f4837d.m();
            t0.u((ViewGroup) k10.mView.getParent(), w.this.f4836d).q();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(FragmentManager fragmentManager) {
        this.f4836d = fragmentManager;
    }

    @Override // android.view.LayoutInflater.Factory
    public View onCreateView(String str, Context context, AttributeSet attributeSet) {
        return onCreateView(null, str, context, attributeSet);
    }

    @Override // android.view.LayoutInflater.Factory2
    public View onCreateView(View view, String str, Context context, AttributeSet attributeSet) {
        k0 A;
        if (FragmentContainerView.class.getName().equals(str)) {
            return new FragmentContainerView(context, attributeSet, this.f4836d);
        }
        if ("fragment".equals(str)) {
            String attributeValue = attributeSet.getAttributeValue(null, "class");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, f3.c.f22476a);
            if (attributeValue == null) {
                attributeValue = obtainStyledAttributes.getString(f3.c.f22477b);
            }
            int resourceId = obtainStyledAttributes.getResourceId(f3.c.f22478c, -1);
            String string = obtainStyledAttributes.getString(f3.c.f22479d);
            obtainStyledAttributes.recycle();
            if (attributeValue == null || !u.b(context.getClassLoader(), attributeValue)) {
                return null;
            }
            int id2 = view != null ? view.getId() : 0;
            if (id2 == -1 && resourceId == -1 && string == null) {
                throw new IllegalArgumentException(attributeSet.getPositionDescription() + ": Must specify unique android:id, android:tag, or have a parent with an id for " + attributeValue);
            }
            Fragment n02 = resourceId != -1 ? this.f4836d.n0(resourceId) : null;
            if (n02 == null && string != null) {
                n02 = this.f4836d.o0(string);
            }
            if (n02 == null && id2 != -1) {
                n02 = this.f4836d.n0(id2);
            }
            if (n02 == null) {
                n02 = this.f4836d.z0().a(context.getClassLoader(), attributeValue);
                n02.mFromLayout = true;
                n02.mFragmentId = resourceId != 0 ? resourceId : id2;
                n02.mContainerId = id2;
                n02.mTag = string;
                n02.mInLayout = true;
                FragmentManager fragmentManager = this.f4836d;
                n02.mFragmentManager = fragmentManager;
                n02.mHost = fragmentManager.B0();
                n02.onInflate(this.f4836d.B0().g(), attributeSet, n02.mSavedFragmentState);
                A = this.f4836d.l(n02);
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Fragment " + n02 + " has been inflated via the <fragment> tag: id=0x" + Integer.toHexString(resourceId));
                }
            } else if (!n02.mInLayout) {
                n02.mInLayout = true;
                FragmentManager fragmentManager2 = this.f4836d;
                n02.mFragmentManager = fragmentManager2;
                n02.mHost = fragmentManager2.B0();
                n02.onInflate(this.f4836d.B0().g(), attributeSet, n02.mSavedFragmentState);
                A = this.f4836d.A(n02);
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Retained Fragment " + n02 + " has been re-attached via the <fragment> tag: id=0x" + Integer.toHexString(resourceId));
                }
            } else {
                throw new IllegalArgumentException(attributeSet.getPositionDescription() + ": Duplicate id 0x" + Integer.toHexString(resourceId) + ", tag " + string + ", or parent id 0x" + Integer.toHexString(id2) + " with another fragment for " + attributeValue);
            }
            ViewGroup viewGroup = (ViewGroup) view;
            g3.c.g(n02, viewGroup);
            n02.mContainer = viewGroup;
            A.m();
            A.j();
            View view2 = n02.mView;
            if (view2 == null) {
                throw new IllegalStateException("Fragment " + attributeValue + " did not create a view.");
            }
            if (resourceId != 0) {
                view2.setId(resourceId);
            }
            if (n02.mView.getTag() == null) {
                n02.mView.setTag(string);
            }
            n02.mView.addOnAttachStateChangeListener(new a(A));
            return n02.mView;
        }
        return null;
    }
}
