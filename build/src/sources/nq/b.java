package nq;

import android.content.Context;
import android.view.View;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import fq.e0;
import fq.k5;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends View implements a {

    /* renamed from: d  reason: collision with root package name */
    private final List f41148d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f41148d = new ArrayList();
    }

    @Override // nq.a
    public void a(Map componentParams, boolean z10) {
        boolean z11;
        e0 e0Var;
        Boolean value;
        Intrinsics.checkNotNullParameter(componentParams, "componentParams");
        int i10 = 8;
        if (z10) {
            setVisibility(8);
            return;
        }
        loop0: while (true) {
            z11 = false;
            for (WeakReference weakReference : this.f41148d) {
                k5 k5Var = (k5) weakReference.get();
                JsonLogicBoolean jsonLogicBoolean = null;
                if (k5Var instanceof e0) {
                    e0Var = (e0) k5Var;
                } else {
                    e0Var = null;
                }
                if (e0Var != null) {
                    jsonLogicBoolean = e0Var.getHidden();
                }
                if (jsonLogicBoolean != null && (value = jsonLogicBoolean.getValue(componentParams, k5Var)) != null) {
                    z11 = value.booleanValue();
                }
            }
            break loop0;
        }
        if (!z11) {
            i10 = 0;
        }
        setVisibility(i10);
    }

    @NotNull
    public final List<WeakReference<k5>> getAssociatedComponents() {
        return this.f41148d;
    }
}
