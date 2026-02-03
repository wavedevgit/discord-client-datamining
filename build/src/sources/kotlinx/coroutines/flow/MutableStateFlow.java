package kotlinx.coroutines.flow;

import ms.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface MutableStateFlow extends j0, MutableSharedFlow {
    @Override // ms.j0
    Object getValue();

    boolean h(Object obj, Object obj2);

    void setValue(Object obj);
}
