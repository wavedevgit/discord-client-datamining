package bq;

import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f7102a = new LinkedHashMap();

        public final a a(String str, Function1 cb2) {
            Intrinsics.checkNotNullParameter(cb2, "cb");
            if (str == null) {
                return this;
            }
            this.f7102a.put(str, cb2);
            return this;
        }

        public final List b() {
            return o0.A(this.f7102a);
        }
    }

    List C0();

    List getComponents();

    StepStyles.UiStepStyle getStyles();
}
