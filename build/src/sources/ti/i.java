package ti;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface i {

    /* renamed from: a  reason: collision with root package name */
    public static final i f50716a = new i() { // from class: ti.h
        @Override // ti.i
        public final List a(ComponentRegistrar componentRegistrar) {
            return componentRegistrar.getComponents();
        }
    };

    List a(ComponentRegistrar componentRegistrar);
}
