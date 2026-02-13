package un;

import android.content.Context;
import android.content.ContextWrapper;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentManager;
import com.facebook.react.ReactRootView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f51377a = new b();

    private b() {
    }

    private final FragmentManager b(ReactRootView reactRootView) {
        boolean z10;
        Context context = reactRootView.getContext();
        while (true) {
            z10 = context instanceof FragmentActivity;
            if (z10 || !(context instanceof ContextWrapper)) {
                break;
            }
            context = ((ContextWrapper) context).getBaseContext();
        }
        if (z10) {
            FragmentActivity fragmentActivity = (FragmentActivity) context;
            if (fragmentActivity.getSupportFragmentManager().B0().isEmpty()) {
                return fragmentActivity.getSupportFragmentManager();
            }
            try {
                return FragmentManager.n0(reactRootView).getChildFragmentManager();
            } catch (IllegalStateException unused) {
                return fragmentActivity.getSupportFragmentManager();
            }
        }
        throw new IllegalStateException("[RNScreens] In order to use react-native-screens components your app's activity need to extend ReactActivity");
    }

    /* JADX WARN: Multi-variable type inference failed */
    public final FragmentManager a(ViewGroup view) {
        boolean z10;
        Intrinsics.checkNotNullParameter(view, "view");
        ViewParent viewParent = view;
        while (true) {
            z10 = viewParent instanceof ReactRootView;
            if (z10 || (viewParent instanceof sn.a) || viewParent.getParent() == null) {
                break;
            }
            ViewParent parent = viewParent.getParent();
            Intrinsics.checkNotNullExpressionValue(parent, "getParent(...)");
            viewParent = parent;
        }
        if (viewParent instanceof sn.a) {
            Fragment associatedFragment = ((sn.a) viewParent).getAssociatedFragment();
            if (associatedFragment != null) {
                return associatedFragment.getChildFragmentManager();
            }
            throw new IllegalStateException(("[RNScreens] Parent fragment providing view " + viewParent + " returned nullish fragment").toString());
        } else if (z10) {
            return b(viewParent);
        } else {
            String name = viewParent.getClass().getName();
            throw new IllegalStateException(("[RNScreens] Expected parent to be a ReactRootView, instead found: " + name).toString());
        }
    }
}
