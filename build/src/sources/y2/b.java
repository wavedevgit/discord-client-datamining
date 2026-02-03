package y2;

import androidx.datastore.preferences.protobuf.z;
import java.io.InputStream;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f53882a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final d a(InputStream input) {
            Intrinsics.checkNotNullParameter(input, "input");
            try {
                d I = d.I(input);
                Intrinsics.checkNotNullExpressionValue(I, "{\n                PreferencesProto.PreferenceMap.parseFrom(input)\n            }");
                return I;
            } catch (z e10) {
                throw new w2.a("Unable to parse preferences proto.", e10);
            }
        }

        private a() {
        }
    }
}
