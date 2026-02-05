package zp;

import android.view.View;
import android.view.ViewGroup;
import androidx.core.view.n0;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s {
    public static final void b(View view, final Function0 onPreDraw) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(onPreDraw, "onPreDraw");
        g.f56152o.a(view, new Runnable() { // from class: zp.r
            @Override // java.lang.Runnable
            public final void run() {
                s.c(Function0.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(Function0 function0) {
        function0.invoke();
    }

    public static final List d(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        LinkedList linkedList = new LinkedList();
        ArrayList arrayList = new ArrayList();
        linkedList.push(view);
        while (!linkedList.isEmpty()) {
            Object pollLast = linkedList.pollLast();
            if (pollLast != null) {
                View view2 = (View) pollLast;
                if (view2 instanceof ViewGroup) {
                    for (View view3 : CollectionsKt.O0(kotlin.sequences.k.Y(n0.a((ViewGroup) view2)))) {
                        linkedList.push(view3);
                    }
                }
                if (!Intrinsics.areEqual(view2, view)) {
                    arrayList.add(view2);
                }
            } else {
                throw new IllegalArgumentException("Required value was null.");
            }
        }
        return arrayList;
    }

    public static final void e(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        view.sendAccessibilityEvent(PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS);
    }
}
