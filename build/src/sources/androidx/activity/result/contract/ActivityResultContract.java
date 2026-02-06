package androidx.activity.result.contract;

import android.content.Context;
import android.content.Intent;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class ActivityResultContract {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f1334a;

        public a(Object obj) {
            this.f1334a = obj;
        }

        public final Object a() {
            return this.f1334a;
        }
    }

    public abstract Intent createIntent(Context context, Object obj);

    public a getSynchronousResult(@NotNull Context context, Object obj) {
        Intrinsics.checkNotNullParameter(context, "context");
        return null;
    }

    public abstract Object parseResult(int i10, Intent intent);
}
