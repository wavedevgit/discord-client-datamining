package up;

import android.view.View;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import mp.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Function0 f50834a;

        a(Function0 function0) {
            this.f50834a = function0;
        }
    }

    public static final void b(final up.a navigationState, final Function0 back, final Function0 cancel, Pi2NavigationBar navigationBar, View backPressHandler) {
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(back, "back");
        Intrinsics.checkNotNullParameter(cancel, "cancel");
        Intrinsics.checkNotNullParameter(navigationBar, "navigationBar");
        Intrinsics.checkNotNullParameter(backPressHandler, "backPressHandler");
        navigationBar.l(navigationState, back, cancel);
        Function0 function0 = new Function0() { // from class: up.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c10;
                c10 = e.c(a.this, back, cancel);
                return c10;
            }
        };
        backPressHandler.setTag(m.f38996h, new a(function0));
        if (navigationState.a()) {
            ym.e.c(backPressHandler, function0);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(up.a aVar, Function0 function0, Function0 function02) {
        if (aVar.b()) {
            function0.invoke();
        } else {
            function02.invoke();
        }
        return Unit.f32464a;
    }
}
