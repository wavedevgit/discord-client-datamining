package com.rivereactnative;

import android.util.Log;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n {

    /* renamed from: a  reason: collision with root package name */
    public static final a f17686a = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private static Function2 f17687b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Function2 a() {
            return n.f17687b;
        }

        public final void b(Throwable error, String context) {
            Intrinsics.checkNotNullParameter(error, "error");
            Intrinsics.checkNotNullParameter(context, "context");
            Function2 a10 = a();
            if (a10 != null) {
                try {
                    a10.invoke(error, context);
                    Unit unit = Unit.f32008a;
                    return;
                } catch (Throwable th2) {
                    Log.e("RiveReactNative", "Error in custom error handler for context: " + context, th2);
                    Log.e("RiveReactNative", "Original error:", error);
                    return;
                }
            }
            Log.e("RiveReactNative", "Error in " + context, error);
        }

        public final void c(Function2 function2) {
            n.f17687b = function2;
        }

        private a() {
        }
    }
}
