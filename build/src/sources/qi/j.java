package qi;

import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j extends Exception {
    /* JADX INFO: Access modifiers changed from: protected */
    public j() {
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(String str) {
        super(str);
        q.g(str, "Detail message must not be empty");
    }
}
