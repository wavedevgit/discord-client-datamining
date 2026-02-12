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
    final FragmentManager f4543d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ k0 f4544d;

        a(k0 k0Var) {
            this.f4544d = k0Var;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Fragment k10 = this.f4544d.k();
            this.f4544d.m();
            t0.u((ViewGroup) k10.mView.getParent(), w.this.f4543d).q();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(FragmentManager fragmentManager) {
        this.f4543d = fragmentManager;
    }

    @Override // android.view.LayoutInflater.Factory
    public View onCreateView(String str, Context context, AttributeSet attributeSet) {
        return onCreateView(null, str, context, attributeSet);
    }

    @Override // android.view.LayoutInflater.Factory2
    public View onCreateView(View view, String str, Context context, AttributeSet attributeSet) {
        k0 B;
        if (FragmentContainerView.class.getName().equals(str)) {
            return new FragmentContainerView(context, attributeSet, this.f4543d);
        }
        if ("fragment".equals(str)) {
            String attributeValue = attributeSet.getAttributeValue(null, "class");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, f3.c.f23557a);
            if (attributeValue == null) {
                attributeValue = obtainStyledAttributes.getString(f3.c.f23558b);
            }
            int resourceId = obtainStyledAttributes.getResourceId(f3.c.f23559c, -1);
            String string = obtainStyledAttributes.getString(f3.c.f23560d);
            obtainStyledAttributes.recycle();
            if (attributeValue == null || !u.b(context.getClassLoader(), attributeValue)) {
                return null;
            }
            int id2 = view != null ? view.getId() : 0;
            if (id2 == -1 && resourceId == -1 && string == null) {
                throw new IllegalArgumentException(attributeSet.getPositionDescription() + ": Must specify unique android:id, android:tag, or have a parent with an id for " + attributeValue);
            }
            Fragment o02 = resourceId != -1 ? this.f4543d.o0(resourceId) : null;
            if (o02 == null && string != null) {
                o02 = this.f4543d.p0(string);
            }
            if (o02 == null && id2 != -1) {
                o02 = this.f4543d.o0(id2);
            }
            if (o02 == null) {
                o02 = this.f4543d.A0().a(context.getClassLoader(), attributeValue);
                o02.mFromLayout = true;
                o02.mFragmentId = resourceId != 0 ? resourceId : id2;
                o02.mContainerId = id2;
                o02.mTag = string;
                o02.mInLayout = true;
                FragmentManager fragmentManager = this.f4543d;
                o02.mFragmentManager = fragmentManager;
                o02.mHost = fragmentManager.C0();
                o02.onInflate(this.f4543d.C0().g(), attributeSet, o02.mSavedFragmentState);
                B = this.f4543d.l(o02);
                if (FragmentManager.P0(2)) {
                    Log.v("FragmentManager", "Fragment " + o02 + " has been inflated via the <fragment> tag: id=0x" + Integer.toHexString(resourceId));
                }
            } else if (!o02.mInLayout) {
                o02.mInLayout = true;
                FragmentManager fragmentManager2 = this.f4543d;
                o02.mFragmentManager = fragmentManager2;
                o02.mHost = fragmentManager2.C0();
                o02.onInflate(this.f4543d.C0().g(), attributeSet, o02.mSavedFragmentState);
                B = this.f4543d.B(o02);
                if (FragmentManager.P0(2)) {
                    Log.v("FragmentManager", "Retained Fragment " + o02 + " has been re-attached via the <fragment> tag: id=0x" + Integer.toHexString(resourceId));
                }
            } else {
                throw new IllegalArgumentException(attributeSet.getPositionDescription() + ": Duplicate id 0x" + Integer.toHexString(resourceId) + ", tag " + string + ", or parent id 0x" + Integer.toHexString(id2) + " with another fragment for " + attributeValue);
            }
            ViewGroup viewGroup = (ViewGroup) view;
            g3.c.g(o02, viewGroup);
            o02.mContainer = viewGroup;
            B.m();
            B.j();
            View view2 = o02.mView;
            if (view2 == null) {
                throw new IllegalStateException("Fragment " + attributeValue + " did not create a view.");
            }
            if (resourceId != 0) {
                view2.setId(resourceId);
            }
            if (o02.mView.getTag() == null) {
                o02.mView.setTag(string);
            }
            o02.mView.addOnAttachStateChangeListener(new a(B));
            return o02.mView;
        }
        return null;
    }
}
