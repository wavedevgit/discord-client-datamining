package kotlinx.coroutines.flow;

import ks.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface MutableStateFlow extends j0, MutableSharedFlow {
    @Override // ks.j0
    Object getValue();

    boolean h(Object obj, Object obj2);

    void setValue(Object obj);
}
