package kotlinx.coroutines.flow;

import rs.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface MutableStateFlow extends j0, MutableSharedFlow {
    boolean g(Object obj, Object obj2);

    @Override // rs.j0
    Object getValue();

    void setValue(Object obj);
}
