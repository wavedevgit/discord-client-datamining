package d6;

import com.brentvatne.exoplayer.ReactExoplayerViewManager;
import com.brentvatne.exoplayer.f;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements ReactPackage {

    /* renamed from: a  reason: collision with root package name */
    private f f20328a;

    @Override // com.facebook.react.ReactPackage
    public List createNativeModules(ReactApplicationContext reactApplicationContext) {
        return Collections.EMPTY_LIST;
    }

    @Override // com.facebook.react.ReactPackage
    public List createViewManagers(ReactApplicationContext reactApplicationContext) {
        if (this.f20328a == null) {
            this.f20328a = new com.brentvatne.exoplayer.c(reactApplicationContext);
        }
        return Collections.singletonList(new ReactExoplayerViewManager(this.f20328a));
    }
}
