package qn;

import com.facebook.react.uimanager.BackgroundStyleApplicator;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {
    public static final Integer a(ReactViewGroup reactViewGroup) {
        Intrinsics.checkNotNullParameter(reactViewGroup, "<this>");
        return BackgroundStyleApplicator.getBackgroundColor(reactViewGroup);
    }
}
